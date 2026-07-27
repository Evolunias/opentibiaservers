import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-website');
}

export default function NoResetBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-website" />;
}
