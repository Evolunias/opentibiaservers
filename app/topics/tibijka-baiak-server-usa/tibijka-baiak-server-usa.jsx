import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-usa');
}

export default function TibijkaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-usa" />;
}
