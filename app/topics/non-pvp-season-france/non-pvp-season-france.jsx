import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-france');
}

export default function NonPvpSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-france" />;
}
