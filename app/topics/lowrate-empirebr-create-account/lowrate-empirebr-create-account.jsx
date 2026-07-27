import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-create-account');
}

export default function LowrateEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-create-account" />;
}
