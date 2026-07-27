import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-website');
}

export default function OfficialBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-website" />;
}
