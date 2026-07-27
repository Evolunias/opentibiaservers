import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-website');
}

export default function BestBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-website" />;
}
