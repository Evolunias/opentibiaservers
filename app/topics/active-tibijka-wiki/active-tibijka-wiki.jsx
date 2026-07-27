import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-wiki');
}

export default function ActiveTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-wiki" />;
}
