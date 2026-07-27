import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-create-account');
}

export default function FreshStartOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-create-account" />;
}
