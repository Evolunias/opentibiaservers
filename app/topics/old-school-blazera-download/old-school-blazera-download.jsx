import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-download');
}

export default function OldSchoolBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-download" />;
}
