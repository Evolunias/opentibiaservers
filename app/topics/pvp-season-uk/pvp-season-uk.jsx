import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-uk');
}

export default function PvpSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-uk" />;
}
