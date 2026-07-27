import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-active-players-server-europe');
}

export default function OtmadnessWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-active-players-server-europe" />;
}
