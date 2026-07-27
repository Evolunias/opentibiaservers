import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-uk');
}

export default function ArcaniarlFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-uk" />;
}
