import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-download');
}

export default function OldSchoolTibiaServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-download" />;
}
