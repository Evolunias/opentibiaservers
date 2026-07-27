import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-poland');
}

export default function OldSchoolDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-poland" />;
}
