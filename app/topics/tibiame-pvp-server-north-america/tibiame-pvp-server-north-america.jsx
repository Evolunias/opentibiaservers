import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-north-america');
}

export default function TibiamePvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-north-america" />;
}
