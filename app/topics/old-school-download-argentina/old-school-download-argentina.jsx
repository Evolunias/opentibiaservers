import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-argentina');
}

export default function OldSchoolDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-argentina" />;
}
