import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-download');
}

export default function OldSchoolOriginaltibiaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-download" />;
}
