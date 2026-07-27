import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-wiki');
}

export default function NewMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-wiki" />;
}
