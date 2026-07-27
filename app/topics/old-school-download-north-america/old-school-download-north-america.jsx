import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-north-america');
}

export default function OldSchoolDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-north-america" />;
}
