import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-france');
}

export default function DemolidoresCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-france" />;
}
