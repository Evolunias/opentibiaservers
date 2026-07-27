import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-login');
}

export default function OldSchoolEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-login" />;
}
