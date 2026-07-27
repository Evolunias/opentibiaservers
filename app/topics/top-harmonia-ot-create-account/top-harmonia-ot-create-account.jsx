import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-create-account');
}

export default function TopHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-create-account" />;
}
