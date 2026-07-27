import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-germany');
}

export default function TibiameCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-germany" />;
}
