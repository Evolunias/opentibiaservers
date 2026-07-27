import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-create-account');
}

export default function HighrateCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-create-account" />;
}
