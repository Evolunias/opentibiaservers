import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-create-account');
}

export default function FreshStartCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-create-account" />;
}
