import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-create-account');
}

export default function HighrateThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-create-account" />;
}
