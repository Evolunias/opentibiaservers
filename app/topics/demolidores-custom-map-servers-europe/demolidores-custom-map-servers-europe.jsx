import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-europe');
}

export default function DemolidoresCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-europe" />;
}
