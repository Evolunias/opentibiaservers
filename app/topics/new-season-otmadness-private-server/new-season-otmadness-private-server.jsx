import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-private-server');
}

export default function NewSeasonOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-private-server" />;
}
