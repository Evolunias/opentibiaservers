import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-private-server');
}

export default function OldSchoolMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-private-server" />;
}
