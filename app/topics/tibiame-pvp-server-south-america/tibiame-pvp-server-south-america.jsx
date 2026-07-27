import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-south-america');
}

export default function TibiamePvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-south-america" />;
}
