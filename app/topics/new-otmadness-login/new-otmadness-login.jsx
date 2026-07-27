import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-login');
}

export default function NewOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-login" />;
}
