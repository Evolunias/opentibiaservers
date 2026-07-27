import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-create-account');
}

export default function ActiveHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-create-account" />;
}
