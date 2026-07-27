import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-active-players-server-north-america');
}

export default function OtmadnessWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-active-players-server-north-america" />;
}
