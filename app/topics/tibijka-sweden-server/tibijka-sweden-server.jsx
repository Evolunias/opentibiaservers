import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-sweden-server');
}

export default function TibijkaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-sweden-server" />;
}
