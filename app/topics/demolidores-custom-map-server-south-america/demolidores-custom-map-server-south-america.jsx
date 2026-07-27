import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-south-america');
}

export default function DemolidoresCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-south-america" />;
}
