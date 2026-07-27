import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-client');
}

export default function CustomOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-client" />;
}
