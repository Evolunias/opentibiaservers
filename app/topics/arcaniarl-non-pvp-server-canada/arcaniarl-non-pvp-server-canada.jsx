import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-canada');
}

export default function ArcaniarlNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-canada" />;
}
