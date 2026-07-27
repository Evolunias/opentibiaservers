import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-south-america');
}

export default function OldSchoolDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-south-america" />;
}
