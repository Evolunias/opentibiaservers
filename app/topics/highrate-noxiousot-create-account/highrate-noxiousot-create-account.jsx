import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-create-account');
}

export default function HighrateNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-create-account" />;
}
