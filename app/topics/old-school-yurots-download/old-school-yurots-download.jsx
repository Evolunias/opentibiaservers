import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-download');
}

export default function OldSchoolYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-download" />;
}
