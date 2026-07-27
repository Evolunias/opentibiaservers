import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-poland');
}

export default function TibijkaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-poland" />;
}
