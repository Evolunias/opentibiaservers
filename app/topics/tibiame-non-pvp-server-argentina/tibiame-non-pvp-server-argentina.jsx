import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-argentina');
}

export default function TibiameNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-argentina" />;
}
