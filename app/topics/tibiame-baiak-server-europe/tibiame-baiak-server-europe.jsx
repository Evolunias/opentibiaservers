import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-europe');
}

export default function TibiameBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-europe" />;
}
