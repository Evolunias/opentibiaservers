import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-usa');
}

export default function ArcaniarlFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-usa" />;
}
