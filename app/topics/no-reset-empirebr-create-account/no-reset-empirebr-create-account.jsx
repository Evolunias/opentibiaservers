import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-create-account');
}

export default function NoResetEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-create-account" />;
}
