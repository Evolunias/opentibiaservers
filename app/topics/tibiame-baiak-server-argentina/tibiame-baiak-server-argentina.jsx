import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-argentina');
}

export default function TibiameBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-argentina" />;
}
