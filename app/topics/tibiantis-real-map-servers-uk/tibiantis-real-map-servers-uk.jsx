import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-uk');
}

export default function TibiantisRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-uk" />;
}
