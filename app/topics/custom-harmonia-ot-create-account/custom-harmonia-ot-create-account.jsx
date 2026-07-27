import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-create-account');
}

export default function CustomHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-create-account" />;
}
