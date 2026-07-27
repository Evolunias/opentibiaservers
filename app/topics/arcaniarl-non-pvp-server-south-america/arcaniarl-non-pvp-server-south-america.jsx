import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-south-america');
}

export default function ArcaniarlNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-south-america" />;
}
