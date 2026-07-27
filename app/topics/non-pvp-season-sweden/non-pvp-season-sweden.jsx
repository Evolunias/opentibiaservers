import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-sweden');
}

export default function NonPvpSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-sweden" />;
}
