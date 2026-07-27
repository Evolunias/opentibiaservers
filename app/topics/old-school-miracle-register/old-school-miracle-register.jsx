import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-register');
}

export default function OldSchoolMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-register" />;
}
