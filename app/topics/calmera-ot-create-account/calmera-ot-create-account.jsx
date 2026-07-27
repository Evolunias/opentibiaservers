import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-create-account');
}

export default function CalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-create-account" />;
}
