import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-mexico');
}

export default function TibiameBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-mexico" />;
}
