import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-north-america-servers');
}

export default function TibijkaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-north-america-servers" />;
}
