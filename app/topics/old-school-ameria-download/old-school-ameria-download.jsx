import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-download');
}

export default function OldSchoolAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-download" />;
}
