import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-download');
}

export default function OldSchoolCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-download" />;
}
