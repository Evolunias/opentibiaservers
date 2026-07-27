import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-north-america');
}

export default function PvpSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-north-america" />;
}
