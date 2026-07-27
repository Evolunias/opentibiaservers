import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-download');
}

export default function OldSchoolTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-download" />;
}
