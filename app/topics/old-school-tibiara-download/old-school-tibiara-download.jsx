import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-download');
}

export default function OldSchoolTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-download" />;
}
