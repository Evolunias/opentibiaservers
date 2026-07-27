import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-download');
}

export default function OldSchoolTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-download" />;
}
