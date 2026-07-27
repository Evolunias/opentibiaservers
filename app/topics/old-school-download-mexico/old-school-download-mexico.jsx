import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-mexico');
}

export default function OldSchoolDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-mexico" />;
}
