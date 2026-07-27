import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-private-server-sweden');
}

export default function OldSchoolTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-private-server-sweden" />;
}
