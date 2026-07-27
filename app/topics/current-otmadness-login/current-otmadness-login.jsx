import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-login');
}

export default function CurrentOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-login" />;
}
