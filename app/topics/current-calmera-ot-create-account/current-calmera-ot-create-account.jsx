import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-create-account');
}

export default function CurrentCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-create-account" />;
}
