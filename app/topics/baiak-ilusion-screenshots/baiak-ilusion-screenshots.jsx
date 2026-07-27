import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-screenshots');
}

export default function BaiakIlusionScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-screenshots" />;
}
