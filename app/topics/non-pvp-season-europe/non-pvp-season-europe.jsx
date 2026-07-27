import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-europe');
}

export default function NonPvpSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-europe" />;
}
