import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-argentina');
}

export default function NonPvpSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-argentina" />;
}
