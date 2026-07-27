import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-south-america');
}

export default function AureraGlobalPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-south-america" />;
}
