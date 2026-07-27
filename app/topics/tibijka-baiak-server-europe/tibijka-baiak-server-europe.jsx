import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-europe');
}

export default function TibijkaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-europe" />;
}
