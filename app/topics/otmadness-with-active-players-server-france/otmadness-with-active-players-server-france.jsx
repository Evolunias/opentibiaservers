import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-active-players-server-france');
}

export default function OtmadnessWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-active-players-server-france" />;
}
