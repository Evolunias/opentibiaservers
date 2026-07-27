import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-europe');
}

export default function TibijkaNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-europe" />;
}
