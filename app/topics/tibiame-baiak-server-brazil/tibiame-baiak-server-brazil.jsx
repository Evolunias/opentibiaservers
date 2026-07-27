import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-brazil');
}

export default function TibiameBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-brazil" />;
}
