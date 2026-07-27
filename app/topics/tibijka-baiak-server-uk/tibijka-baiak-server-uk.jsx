import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-uk');
}

export default function TibijkaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-uk" />;
}
