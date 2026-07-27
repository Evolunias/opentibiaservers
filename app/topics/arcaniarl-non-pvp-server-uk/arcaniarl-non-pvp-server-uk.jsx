import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-uk');
}

export default function ArcaniarlNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-uk" />;
}
