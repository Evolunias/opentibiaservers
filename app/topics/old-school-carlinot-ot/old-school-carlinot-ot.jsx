import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-ot');
}

export default function OldSchoolCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-ot" />;
}
