import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-canada');
}

export default function PvpSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-canada" />;
}
