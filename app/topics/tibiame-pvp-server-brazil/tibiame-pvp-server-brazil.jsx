import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-brazil');
}

export default function TibiamePvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-brazil" />;
}
