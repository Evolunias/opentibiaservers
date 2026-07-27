import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-sweden-servers');
}

export default function TibijkaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-sweden-servers" />;
}
