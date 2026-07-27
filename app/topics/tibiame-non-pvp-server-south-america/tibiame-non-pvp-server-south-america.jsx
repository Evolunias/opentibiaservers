import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-south-america');
}

export default function TibiameNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-south-america" />;
}
