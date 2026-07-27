import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-create-account');
}

export default function PopularOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-create-account" />;
}
