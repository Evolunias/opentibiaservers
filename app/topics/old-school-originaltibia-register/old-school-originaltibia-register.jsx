import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-register');
}

export default function OldSchoolOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-register" />;
}
