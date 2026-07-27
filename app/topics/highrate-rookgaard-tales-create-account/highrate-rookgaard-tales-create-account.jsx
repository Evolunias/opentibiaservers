import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-create-account');
}

export default function HighrateRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-create-account" />;
}
