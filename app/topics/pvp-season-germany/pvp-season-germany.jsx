import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-germany');
}

export default function PvpSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-germany" />;
}
