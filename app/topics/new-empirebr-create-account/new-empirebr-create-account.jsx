import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-create-account');
}

export default function NewEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-create-account" />;
}
