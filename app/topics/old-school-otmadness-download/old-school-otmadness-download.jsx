import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-download');
}

export default function OldSchoolOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-download" />;
}
