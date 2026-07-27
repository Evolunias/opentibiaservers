import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-download');
}

export default function OldSchoolBaiakIlusionDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-download" />;
}
