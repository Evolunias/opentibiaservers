import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-client');
}

export default function NewOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-client" />;
}
