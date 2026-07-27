import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-france');
}

export default function DemolidoresCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-france" />;
}
