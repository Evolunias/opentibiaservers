import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-client');
}

export default function NewSeasonOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-client" />;
}
