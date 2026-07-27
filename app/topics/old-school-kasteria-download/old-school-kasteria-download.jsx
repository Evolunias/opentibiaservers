import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-download');
}

export default function OldSchoolKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-download" />;
}
