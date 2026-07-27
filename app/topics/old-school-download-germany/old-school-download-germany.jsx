import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-germany');
}

export default function OldSchoolDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-germany" />;
}
