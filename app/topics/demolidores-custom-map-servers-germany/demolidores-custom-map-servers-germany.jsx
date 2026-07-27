import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-germany');
}

export default function DemolidoresCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-germany" />;
}
