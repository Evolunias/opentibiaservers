import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-canada');
}

export default function TibijkaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-canada" />;
}
