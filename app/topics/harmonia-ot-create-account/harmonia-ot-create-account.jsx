import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-create-account');
}

export default function HarmoniaOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-create-account" />;
}
