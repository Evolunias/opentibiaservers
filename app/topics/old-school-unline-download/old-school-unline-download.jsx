import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-download');
}

export default function OldSchoolUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-download" />;
}
