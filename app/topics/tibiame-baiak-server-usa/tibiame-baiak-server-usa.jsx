import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-usa');
}

export default function TibiameBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-usa" />;
}
