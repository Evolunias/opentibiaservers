import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-website');
}

export default function NewBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-website" />;
}
