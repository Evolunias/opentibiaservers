import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-create-account');
}

export default function HighrateEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-create-account" />;
}
