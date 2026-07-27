import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-private-server');
}

export default function OldSchoolNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-private-server" />;
}
