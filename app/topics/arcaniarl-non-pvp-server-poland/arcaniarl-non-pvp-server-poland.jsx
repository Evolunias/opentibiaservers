import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-poland');
}

export default function ArcaniarlNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-poland" />;
}
