import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-wiki');
}

export default function NewTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-wiki" />;
}
