import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-wiki');
}

export default function CurrentBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-wiki" />;
}
