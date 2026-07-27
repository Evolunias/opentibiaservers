import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-north-america');
}

export default function ArcaniarlNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-north-america" />;
}
