import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-create-account');
}

export default function CoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="coxaot-create-account" />;
}
