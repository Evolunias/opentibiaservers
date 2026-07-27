import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-create-account');
}

export default function HighrateOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-create-account" />;
}
