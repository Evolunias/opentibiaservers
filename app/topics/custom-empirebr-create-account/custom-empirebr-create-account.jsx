import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-create-account');
}

export default function CustomEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-create-account" />;
}
