import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-client');
}

export default function FreshStartOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-client" />;
}
