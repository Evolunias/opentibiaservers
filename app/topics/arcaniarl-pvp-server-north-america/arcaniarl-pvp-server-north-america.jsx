import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-north-america');
}

export default function ArcaniarlPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-north-america" />;
}
