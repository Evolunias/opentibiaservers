import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-create-account');
}

export default function NewHarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-create-account" />;
}
