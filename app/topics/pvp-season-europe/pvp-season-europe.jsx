import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-europe');
}

export default function PvpSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-europe" />;
}
