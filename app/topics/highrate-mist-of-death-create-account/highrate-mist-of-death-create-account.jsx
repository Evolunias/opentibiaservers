import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-create-account');
}

export default function HighrateMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-create-account" />;
}
