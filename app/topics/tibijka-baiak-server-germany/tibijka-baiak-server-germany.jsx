import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-germany');
}

export default function TibijkaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-germany" />;
}
