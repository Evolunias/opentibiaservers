import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-download');
}

export default function OldSchoolNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-download" />;
}
