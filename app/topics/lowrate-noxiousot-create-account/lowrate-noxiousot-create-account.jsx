import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-create-account');
}

export default function LowrateNoxiousotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-create-account" />;
}
