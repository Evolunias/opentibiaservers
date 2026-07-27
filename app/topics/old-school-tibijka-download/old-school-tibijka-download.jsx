import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-download');
}

export default function OldSchoolTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-download" />;
}
