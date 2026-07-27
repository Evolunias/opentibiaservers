import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-client');
}

export default function TopOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-client" />;
}
