import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-south-america');
}

export default function DemolidoresRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-south-america" />;
}
