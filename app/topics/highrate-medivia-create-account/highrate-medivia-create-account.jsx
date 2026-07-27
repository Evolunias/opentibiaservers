import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-create-account');
}

export default function HighrateMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-create-account" />;
}
