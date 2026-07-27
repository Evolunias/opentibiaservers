import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-europe');
}

export default function TibiaraPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-europe" />;
}
