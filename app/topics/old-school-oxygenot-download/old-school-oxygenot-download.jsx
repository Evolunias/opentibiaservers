import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-download');
}

export default function OldSchoolOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-download" />;
}
