import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-uk');
}

export default function TibiameBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-uk" />;
}
