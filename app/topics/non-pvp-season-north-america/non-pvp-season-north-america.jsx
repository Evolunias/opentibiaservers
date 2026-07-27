import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-north-america');
}

export default function NonPvpSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-north-america" />;
}
