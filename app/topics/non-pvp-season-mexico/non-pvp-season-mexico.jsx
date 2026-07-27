import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-mexico');
}

export default function NonPvpSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-mexico" />;
}
