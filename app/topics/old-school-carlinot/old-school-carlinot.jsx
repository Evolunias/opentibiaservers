import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot');
}

export default function OldSchoolCarlinotKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot" />;
}
