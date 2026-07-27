import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-active-players-server-germany');
}

export default function OtmadnessWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-active-players-server-germany" />;
}
