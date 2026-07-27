import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-wiki');
}

export default function NewTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-wiki" />;
}
