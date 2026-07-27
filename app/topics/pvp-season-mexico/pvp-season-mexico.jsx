import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-mexico');
}

export default function PvpSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-mexico" />;
}
