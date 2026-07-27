import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-latin-america');
}

export default function OldSchoolDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-latin-america" />;
}
