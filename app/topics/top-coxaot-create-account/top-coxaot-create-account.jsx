import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-create-account');
}

export default function TopCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-create-account" />;
}
