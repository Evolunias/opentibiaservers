import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-usa');
}

export default function NonPvpSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-usa" />;
}
