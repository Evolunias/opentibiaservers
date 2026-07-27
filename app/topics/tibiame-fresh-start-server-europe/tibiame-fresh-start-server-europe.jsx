import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-europe');
}

export default function TibiameFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-europe" />;
}
