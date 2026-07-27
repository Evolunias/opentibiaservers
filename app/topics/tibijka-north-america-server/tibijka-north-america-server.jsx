import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-north-america-server');
}

export default function TibijkaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-north-america-server" />;
}
