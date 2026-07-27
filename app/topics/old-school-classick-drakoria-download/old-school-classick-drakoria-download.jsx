import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-download');
}

export default function OldSchoolClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-download" />;
}
