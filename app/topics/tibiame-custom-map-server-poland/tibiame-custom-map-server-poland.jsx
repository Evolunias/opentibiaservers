import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-poland');
}

export default function TibiameCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-poland" />;
}
