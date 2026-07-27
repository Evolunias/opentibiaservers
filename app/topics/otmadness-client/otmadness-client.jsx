import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-client');
}

export default function OtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="otmadness-client" />;
}
