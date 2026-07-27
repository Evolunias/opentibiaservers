import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-europe');
}

export default function TibiameCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-europe" />;
}
