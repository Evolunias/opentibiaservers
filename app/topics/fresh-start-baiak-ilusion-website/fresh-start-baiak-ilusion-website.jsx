import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-website');
}

export default function FreshStartBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-website" />;
}
