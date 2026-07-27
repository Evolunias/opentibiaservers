import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-client');
}

export default function BestOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-client" />;
}
