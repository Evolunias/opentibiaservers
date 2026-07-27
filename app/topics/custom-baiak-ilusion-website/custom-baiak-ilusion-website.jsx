import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-website');
}

export default function CustomBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-website" />;
}
