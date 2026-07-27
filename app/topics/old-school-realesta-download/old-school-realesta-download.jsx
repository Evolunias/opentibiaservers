import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-download');
}

export default function OldSchoolRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-download" />;
}
