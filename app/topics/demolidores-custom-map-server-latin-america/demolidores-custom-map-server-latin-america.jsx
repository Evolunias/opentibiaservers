import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-latin-america');
}

export default function DemolidoresCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-latin-america" />;
}
