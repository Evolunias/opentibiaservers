import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-latin-america-servers');
}

export default function TibiascapeLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-latin-america-servers" />;
}
