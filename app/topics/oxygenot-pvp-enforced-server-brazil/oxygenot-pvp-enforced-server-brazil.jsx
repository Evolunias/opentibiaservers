import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-brazil');
}

export default function OxygenotPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-brazil" />;
}
