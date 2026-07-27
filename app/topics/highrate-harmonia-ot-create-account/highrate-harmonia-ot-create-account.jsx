import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-create-account');
}

export default function HighrateHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-create-account" />;
}
