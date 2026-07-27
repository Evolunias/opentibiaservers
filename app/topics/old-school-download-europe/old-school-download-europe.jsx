import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-europe');
}

export default function OldSchoolDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-europe" />;
}
