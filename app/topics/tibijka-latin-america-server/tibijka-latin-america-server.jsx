import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-latin-america-server');
}

export default function TibijkaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-latin-america-server" />;
}
