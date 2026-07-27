import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-wiki');
}

export default function TibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-wiki" />;
}
