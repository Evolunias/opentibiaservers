import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-download');
}

export default function OldSchoolRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-download" />;
}
