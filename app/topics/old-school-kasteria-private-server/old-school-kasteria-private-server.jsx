import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-private-server');
}

export default function OldSchoolKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-private-server" />;
}
