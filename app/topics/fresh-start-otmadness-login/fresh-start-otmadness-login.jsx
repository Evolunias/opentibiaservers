import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-login');
}

export default function FreshStartOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-login" />;
}
