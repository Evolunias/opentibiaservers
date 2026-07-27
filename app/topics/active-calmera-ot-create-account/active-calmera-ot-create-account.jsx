import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-create-account');
}

export default function ActiveCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-create-account" />;
}
