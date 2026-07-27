import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-sweden');
}

export default function TibiameHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-sweden" />;
}
