import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-canada');
}

export default function TibiameBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-canada" />;
}
