import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-sweden');
}

export default function TibiamePvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-sweden" />;
}
