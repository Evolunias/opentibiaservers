import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-client');
}

export default function RealMapAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-client" />;
}
