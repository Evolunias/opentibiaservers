import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-ot-server');
}

export default function OldSchoolCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-ot-server" />;
}
