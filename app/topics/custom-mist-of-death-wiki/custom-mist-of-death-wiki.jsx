import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-wiki');
}

export default function CustomMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-wiki" />;
}
