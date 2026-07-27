import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-uk');
}

export default function KasteriaRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-uk" />;
}
