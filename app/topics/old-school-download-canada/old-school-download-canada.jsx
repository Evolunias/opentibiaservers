import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-canada');
}

export default function OldSchoolDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-canada" />;
}
