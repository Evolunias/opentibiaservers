import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-create-account');
}

export default function EmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="empirebr-create-account" />;
}
