import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-login');
}

export default function NewSeasonOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-login" />;
}
