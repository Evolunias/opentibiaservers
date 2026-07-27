import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-south-america');
}

export default function DemolidoresCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-south-america" />;
}
