import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-north-america');
}

export default function ArcaniarlFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-north-america" />;
}
