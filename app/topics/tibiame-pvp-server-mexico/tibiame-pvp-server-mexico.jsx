import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-mexico');
}

export default function TibiamePvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-mexico" />;
}
