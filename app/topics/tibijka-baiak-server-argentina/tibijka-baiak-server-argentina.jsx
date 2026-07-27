import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-argentina');
}

export default function TibijkaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-argentina" />;
}
