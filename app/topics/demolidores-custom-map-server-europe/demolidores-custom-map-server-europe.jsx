import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-europe');
}

export default function DemolidoresCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-europe" />;
}
