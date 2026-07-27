import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-uk');
}

export default function DemolidoresCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-uk" />;
}
