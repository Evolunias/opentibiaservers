import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-create-account');
}

export default function HighrateMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-create-account" />;
}
