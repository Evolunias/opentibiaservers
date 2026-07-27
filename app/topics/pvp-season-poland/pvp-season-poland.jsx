import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-poland');
}

export default function PvpSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-poland" />;
}
