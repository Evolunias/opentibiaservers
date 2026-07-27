import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-europe');
}

export default function ArcaniarlNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-europe" />;
}
