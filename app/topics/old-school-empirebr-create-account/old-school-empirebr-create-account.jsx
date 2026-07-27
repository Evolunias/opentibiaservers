import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-create-account');
}

export default function OldSchoolEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-create-account" />;
}
