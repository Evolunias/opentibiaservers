import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-create-account');
}

export default function HighrateMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-create-account" />;
}
