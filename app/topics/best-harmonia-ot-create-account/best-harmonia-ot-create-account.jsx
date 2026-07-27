import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-create-account');
}

export default function BestHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-create-account" />;
}
