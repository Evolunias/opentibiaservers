import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-poland');
}

export default function ArcaniarlFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-poland" />;
}
