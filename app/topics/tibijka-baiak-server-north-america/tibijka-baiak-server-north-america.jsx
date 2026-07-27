import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-north-america');
}

export default function TibijkaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-north-america" />;
}
