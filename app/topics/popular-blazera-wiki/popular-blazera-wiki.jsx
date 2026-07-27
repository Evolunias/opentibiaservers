import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-wiki');
}

export default function PopularBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-wiki" />;
}
