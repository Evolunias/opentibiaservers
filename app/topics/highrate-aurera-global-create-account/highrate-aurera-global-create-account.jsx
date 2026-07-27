import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-create-account');
}

export default function HighrateAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-create-account" />;
}
