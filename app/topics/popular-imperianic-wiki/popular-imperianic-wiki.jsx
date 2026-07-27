import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-wiki');
}

export default function PopularImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-wiki" />;
}
