import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-create-account');
}

export default function TopEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-create-account" />;
}
