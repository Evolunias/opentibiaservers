import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-brazil');
}

export default function OldSchoolDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-brazil" />;
}
