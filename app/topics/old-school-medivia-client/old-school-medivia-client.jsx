import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-client');
}

export default function OldSchoolMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-client" />;
}
