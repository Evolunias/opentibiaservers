import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-poland');
}

export default function TibiameRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-poland" />;
}
