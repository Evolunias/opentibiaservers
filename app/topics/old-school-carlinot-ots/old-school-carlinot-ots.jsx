import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-ots');
}

export default function OldSchoolCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-ots" />;
}
