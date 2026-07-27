import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-create-account');
}

export default function CurrentHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-create-account" />;
}
