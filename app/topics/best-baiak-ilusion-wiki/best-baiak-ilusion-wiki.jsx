import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-wiki');
}

export default function BestBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-wiki" />;
}
