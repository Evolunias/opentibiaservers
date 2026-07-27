import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-create-account');
}

export default function HighrateCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-create-account" />;
}
