import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-create-account');
}

export default function HighrateAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-create-account" />;
}
