import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-real-map-servers');
}

export default function CalmeraOt15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-real-map-servers" />;
}
