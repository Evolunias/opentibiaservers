import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-server');
}

export default function OldSchoolCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-server" />;
}
