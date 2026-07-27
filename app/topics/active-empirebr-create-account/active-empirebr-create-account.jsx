import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-create-account');
}

export default function ActiveEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-create-account" />;
}
