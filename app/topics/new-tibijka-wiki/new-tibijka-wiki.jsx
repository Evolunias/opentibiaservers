import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-wiki');
}

export default function NewTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-wiki" />;
}
