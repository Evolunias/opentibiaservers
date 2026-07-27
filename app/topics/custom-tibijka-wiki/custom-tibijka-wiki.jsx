import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-wiki');
}

export default function CustomTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-wiki" />;
}
