import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-poland');
}

export default function ArcaniarlPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-poland" />;
}
