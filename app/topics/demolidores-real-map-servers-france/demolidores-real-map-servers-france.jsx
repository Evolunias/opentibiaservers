import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-france');
}

export default function DemolidoresRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-france" />;
}
