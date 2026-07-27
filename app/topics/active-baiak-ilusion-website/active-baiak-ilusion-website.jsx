import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-website');
}

export default function ActiveBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-website" />;
}
