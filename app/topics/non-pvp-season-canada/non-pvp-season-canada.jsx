import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-canada');
}

export default function NonPvpSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-canada" />;
}
