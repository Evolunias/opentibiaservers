import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-latin-america');
}

export default function TibiascapeFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-latin-america" />;
}
