import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-website');
}

export default function TopBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-website" />;
}
