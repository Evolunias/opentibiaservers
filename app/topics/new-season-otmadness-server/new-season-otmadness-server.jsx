import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-server');
}

export default function NewSeasonOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-server" />;
}
