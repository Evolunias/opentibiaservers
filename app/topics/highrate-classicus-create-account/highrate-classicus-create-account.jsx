import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-create-account');
}

export default function HighrateClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-create-account" />;
}
