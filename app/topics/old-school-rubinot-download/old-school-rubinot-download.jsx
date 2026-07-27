import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-download');
}

export default function OldSchoolRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-download" />;
}
