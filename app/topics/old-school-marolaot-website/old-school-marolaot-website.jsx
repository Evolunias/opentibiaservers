import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-website');
}

export default function OldSchoolMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-website" />;
}
