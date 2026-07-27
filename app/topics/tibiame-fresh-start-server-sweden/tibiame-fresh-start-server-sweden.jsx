import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-sweden');
}

export default function TibiameFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-sweden" />;
}
