import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-brazil');
}

export default function TibiaraPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-brazil" />;
}
