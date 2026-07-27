import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-usa');
}

export default function KasteriaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-usa" />;
}
