import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-latin-america-servers');
}

export default function TibijkaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-latin-america-servers" />;
}
