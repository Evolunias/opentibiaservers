import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-brazil');
}

export default function ArcaniarlFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-brazil" />;
}
