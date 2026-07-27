import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-create-account');
}

export default function HighrateXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-create-account" />;
}
