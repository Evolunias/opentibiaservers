import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-download');
}

export default function OldSchoolMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-download" />;
}
