import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-germany');
}

export default function NonPvpSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-germany" />;
}
