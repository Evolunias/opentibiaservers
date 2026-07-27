import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-download');
}

export default function OldSchoolEternalOdysseyDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-download" />;
}
