import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-create-account');
}

export default function CustomCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-create-account" />;
}
