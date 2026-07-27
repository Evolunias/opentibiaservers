import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-wiki');
}

export default function FreshStartBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-wiki" />;
}
