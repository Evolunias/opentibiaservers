import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-germany');
}

export default function ArcaniarlFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-germany" />;
}
