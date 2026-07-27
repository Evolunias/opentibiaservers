import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-create-account');
}

export default function BestOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-create-account" />;
}
