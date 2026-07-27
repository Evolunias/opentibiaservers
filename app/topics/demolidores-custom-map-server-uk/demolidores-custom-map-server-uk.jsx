import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-uk');
}

export default function DemolidoresCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-uk" />;
}
