import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-sweden');
}

export default function OldSchoolTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-sweden" />;
}
