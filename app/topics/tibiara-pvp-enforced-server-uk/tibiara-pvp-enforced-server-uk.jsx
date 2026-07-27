import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-uk');
}

export default function TibiaraPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-uk" />;
}
