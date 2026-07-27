import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-download');
}

export default function OldSchoolTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-download" />;
}
