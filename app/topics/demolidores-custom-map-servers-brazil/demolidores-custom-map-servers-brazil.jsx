import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-brazil');
}

export default function DemolidoresCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-brazil" />;
}
