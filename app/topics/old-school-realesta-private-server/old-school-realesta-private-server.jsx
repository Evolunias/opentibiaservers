import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-private-server');
}

export default function OldSchoolRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-private-server" />;
}
