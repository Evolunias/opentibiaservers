import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-create-account');
}

export default function CurrentCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-create-account" />;
}
