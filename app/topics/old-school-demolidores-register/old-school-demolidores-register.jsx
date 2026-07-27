import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-register');
}

export default function OldSchoolDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-register" />;
}
