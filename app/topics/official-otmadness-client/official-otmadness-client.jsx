import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-client');
}

export default function OfficialOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-client" />;
}
