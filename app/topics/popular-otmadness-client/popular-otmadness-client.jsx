import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-client');
}

export default function PopularOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-client" />;
}
