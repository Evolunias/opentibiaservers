import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-south-america');
}

export default function NonPvpSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-south-america" />;
}
