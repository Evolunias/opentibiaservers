import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-download');
}

export default function OldSchoolMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-download" />;
}
