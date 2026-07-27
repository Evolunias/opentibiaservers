import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-ot-server');
}

export default function OldSchoolMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-ot-server" />;
}
