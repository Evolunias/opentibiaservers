import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-brazil');
}

export default function PvpSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-brazil" />;
}
