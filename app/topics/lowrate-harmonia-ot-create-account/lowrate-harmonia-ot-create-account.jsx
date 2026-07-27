import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-create-account');
}

export default function LowrateHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-create-account" />;
}
