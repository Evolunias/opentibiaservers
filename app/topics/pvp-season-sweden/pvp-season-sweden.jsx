import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-sweden');
}

export default function PvpSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-sweden" />;
}
