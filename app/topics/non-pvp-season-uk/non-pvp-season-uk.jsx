import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-uk');
}

export default function NonPvpSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-uk" />;
}
