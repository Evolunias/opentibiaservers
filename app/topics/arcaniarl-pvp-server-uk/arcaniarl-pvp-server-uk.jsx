import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-uk');
}

export default function ArcaniarlPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-uk" />;
}
