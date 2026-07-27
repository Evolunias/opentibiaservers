import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-usa');
}

export default function TibiameNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-usa" />;
}
