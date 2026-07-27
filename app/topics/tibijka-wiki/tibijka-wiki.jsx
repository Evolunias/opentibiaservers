import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-wiki');
}

export default function TibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="tibijka-wiki" />;
}
