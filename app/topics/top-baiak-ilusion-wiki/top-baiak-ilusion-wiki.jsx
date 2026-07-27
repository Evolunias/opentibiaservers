import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-wiki');
}

export default function TopBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-wiki" />;
}
