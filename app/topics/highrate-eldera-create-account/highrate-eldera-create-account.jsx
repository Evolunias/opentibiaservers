import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-create-account');
}

export default function HighrateElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-create-account" />;
}
