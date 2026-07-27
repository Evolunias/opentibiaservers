import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-germany');
}

export default function TibiameCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-germany" />;
}
