import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-canada');
}

export default function TibijkaBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-canada" />;
}
