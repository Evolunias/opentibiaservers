import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-brazil');
}

export default function TibiameNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-brazil" />;
}
