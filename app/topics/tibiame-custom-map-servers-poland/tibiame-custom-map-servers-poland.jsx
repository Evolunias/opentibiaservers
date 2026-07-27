import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-poland');
}

export default function TibiameCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-poland" />;
}
