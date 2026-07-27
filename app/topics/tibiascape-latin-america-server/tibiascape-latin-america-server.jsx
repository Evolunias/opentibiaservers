import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-latin-america-server');
}

export default function TibiascapeLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-latin-america-server" />;
}
