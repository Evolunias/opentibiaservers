import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-download');
}

export default function OldSchoolNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-download" />;
}
