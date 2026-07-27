import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-create-account');
}

export default function BestEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-create-account" />;
}
