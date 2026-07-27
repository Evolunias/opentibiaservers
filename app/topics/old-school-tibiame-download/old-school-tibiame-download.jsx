import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-download');
}

export default function OldSchoolTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-download" />;
}
