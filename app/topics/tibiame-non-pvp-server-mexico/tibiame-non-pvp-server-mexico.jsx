import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-mexico');
}

export default function TibiameNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-mexico" />;
}
