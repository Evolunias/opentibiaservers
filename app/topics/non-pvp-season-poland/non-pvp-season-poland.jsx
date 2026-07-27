import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-poland');
}

export default function NonPvpSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-poland" />;
}
