import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-sweden');
}

export default function TibiameRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-sweden" />;
}
