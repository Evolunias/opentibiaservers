import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-create-account');
}

export default function HighrateNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-create-account" />;
}
