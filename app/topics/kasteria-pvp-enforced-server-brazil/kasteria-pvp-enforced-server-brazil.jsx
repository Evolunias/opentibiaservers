import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-brazil');
}

export default function KasteriaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-brazil" />;
}
