import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-download');
}

export default function OldSchoolEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-download" />;
}
