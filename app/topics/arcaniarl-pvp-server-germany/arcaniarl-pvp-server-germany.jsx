import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-germany');
}

export default function ArcaniarlPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-germany" />;
}
