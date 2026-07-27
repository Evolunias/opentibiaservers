import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-europe');
}

export default function TibiameCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-europe" />;
}
