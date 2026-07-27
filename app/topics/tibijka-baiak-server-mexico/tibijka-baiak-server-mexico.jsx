import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-mexico');
}

export default function TibijkaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-mexico" />;
}
