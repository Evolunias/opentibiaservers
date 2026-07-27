import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-wiki');
}

export default function NewClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-wiki" />;
}
