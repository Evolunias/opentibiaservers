import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-create-account');
}

export default function TopCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-create-account" />;
}
