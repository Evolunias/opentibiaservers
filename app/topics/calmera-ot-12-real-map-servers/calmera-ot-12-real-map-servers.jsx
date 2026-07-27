import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-real-map-servers');
}

export default function CalmeraOt12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-real-map-servers" />;
}
