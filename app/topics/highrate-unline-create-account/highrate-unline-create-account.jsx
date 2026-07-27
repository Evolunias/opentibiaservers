import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-create-account');
}

export default function HighrateUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-create-account" />;
}
