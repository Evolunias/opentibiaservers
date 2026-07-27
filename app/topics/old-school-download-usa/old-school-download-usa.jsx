import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-usa');
}

export default function OldSchoolDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-usa" />;
}
