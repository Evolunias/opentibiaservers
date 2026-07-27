import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-canada');
}

export default function TibiamePvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-canada" />;
}
