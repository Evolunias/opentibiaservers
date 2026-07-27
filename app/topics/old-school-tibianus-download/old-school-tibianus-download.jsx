import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-download');
}

export default function OldSchoolTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-download" />;
}
