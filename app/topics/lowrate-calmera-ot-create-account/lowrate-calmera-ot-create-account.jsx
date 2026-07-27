import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-create-account');
}

export default function LowrateCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-create-account" />;
}
