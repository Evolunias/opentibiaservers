import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-argentina');
}

export default function PvpSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-argentina" />;
}
