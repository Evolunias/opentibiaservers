import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-download');
}

export default function OldSchoolMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-download" />;
}
