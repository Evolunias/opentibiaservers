import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-germany');
}

export default function ArcaniarlNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-germany" />;
}
