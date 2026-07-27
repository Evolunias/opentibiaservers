import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-south-america');
}

export default function ArcaniarlPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-south-america" />;
}
