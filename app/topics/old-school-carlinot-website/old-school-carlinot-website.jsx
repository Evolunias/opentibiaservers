import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-website');
}

export default function OldSchoolCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-website" />;
}
