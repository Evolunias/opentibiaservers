import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-client');
}

export default function CurrentOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-client" />;
}
