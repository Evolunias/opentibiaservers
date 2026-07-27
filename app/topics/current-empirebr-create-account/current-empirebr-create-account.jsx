import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-create-account');
}

export default function CurrentEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-create-account" />;
}
