import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-create-account');
}

export default function BestCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-create-account" />;
}
