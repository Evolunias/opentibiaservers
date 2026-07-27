import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-download');
}

export default function OldSchoolArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-download" />;
}
