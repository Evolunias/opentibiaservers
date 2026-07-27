import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-create-account');
}

export default function ActiveCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-create-account" />;
}
