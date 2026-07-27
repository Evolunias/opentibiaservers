import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-open-tibia-server-sweden');
}

export default function OldSchoolOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-open-tibia-server-sweden" />;
}
