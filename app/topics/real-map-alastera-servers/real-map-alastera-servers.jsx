import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-servers');
}

export default function RealMapAlasteraServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-servers" />;
}
