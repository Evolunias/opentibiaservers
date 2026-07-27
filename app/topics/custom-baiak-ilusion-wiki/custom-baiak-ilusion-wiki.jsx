import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-wiki');
}

export default function CustomBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-wiki" />;
}
