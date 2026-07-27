import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-server');
}

export default function OldSchoolMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-server" />;
}
