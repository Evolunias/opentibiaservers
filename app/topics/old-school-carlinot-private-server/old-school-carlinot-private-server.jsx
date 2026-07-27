import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-private-server');
}

export default function OldSchoolCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-private-server" />;
}
