import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-latin-america');
}

export default function TibijkaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-latin-america" />;
}
