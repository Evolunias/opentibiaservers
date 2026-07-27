import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-argentina');
}

export default function TibiamePvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-argentina" />;
}
