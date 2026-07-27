import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-login');
}

export default function BestOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-login" />;
}
