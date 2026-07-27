import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-europe');
}

export default function ArcaniarlPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-europe" />;
}
