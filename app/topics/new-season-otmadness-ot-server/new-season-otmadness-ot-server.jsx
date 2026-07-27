import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-ot-server');
}

export default function NewSeasonOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-ot-server" />;
}
