import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-germany');
}

export default function DemolidoresCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-germany" />;
}
