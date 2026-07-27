import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-usa');
}

export default function PvpSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-usa" />;
}
