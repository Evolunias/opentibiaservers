import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-europe');
}

export default function TibijkaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-europe" />;
}
