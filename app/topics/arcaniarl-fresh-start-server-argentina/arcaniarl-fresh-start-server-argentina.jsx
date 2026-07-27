import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-argentina');
}

export default function ArcaniarlFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-argentina" />;
}
