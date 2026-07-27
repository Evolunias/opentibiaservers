import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-latin-america');
}

export default function TibiamePvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-latin-america" />;
}
