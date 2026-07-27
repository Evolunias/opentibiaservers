import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-client');
}

export default function ActiveOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-client" />;
}
