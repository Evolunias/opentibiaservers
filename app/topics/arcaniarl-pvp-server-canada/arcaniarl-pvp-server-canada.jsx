import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-canada');
}

export default function ArcaniarlPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-canada" />;
}
