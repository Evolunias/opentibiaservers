import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-sweden');
}

export default function TibiameLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-sweden" />;
}
