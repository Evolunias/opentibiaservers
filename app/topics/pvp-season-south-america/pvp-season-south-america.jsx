import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-south-america');
}

export default function PvpSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-south-america" />;
}
