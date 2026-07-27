import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-download');
}

export default function OldSchoolMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-download" />;
}
