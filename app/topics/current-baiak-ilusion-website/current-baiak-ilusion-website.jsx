import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-website');
}

export default function CurrentBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-website" />;
}
