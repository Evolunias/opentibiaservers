import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-uk');
}

export default function OldSchoolDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-uk" />;
}
