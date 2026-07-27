import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-season');
}

export default function ArcaniarlSeasonKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-season" />;
}
