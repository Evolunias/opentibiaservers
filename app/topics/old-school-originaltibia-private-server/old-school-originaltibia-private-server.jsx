import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-private-server');
}

export default function OldSchoolOriginaltibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-private-server" />;
}
