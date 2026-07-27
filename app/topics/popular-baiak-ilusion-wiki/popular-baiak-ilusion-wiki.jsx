import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-wiki');
}

export default function PopularBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-wiki" />;
}
