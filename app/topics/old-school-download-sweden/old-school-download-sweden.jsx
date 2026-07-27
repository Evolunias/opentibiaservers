import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-sweden');
}

export default function OldSchoolDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-sweden" />;
}
