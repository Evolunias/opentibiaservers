import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-register');
}

export default function OldSchoolTibiaServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-register" />;
}
