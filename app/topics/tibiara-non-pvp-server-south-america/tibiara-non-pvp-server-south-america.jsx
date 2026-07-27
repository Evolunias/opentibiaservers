import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-south-america');
}

export default function TibiaraNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-south-america" />;
}
