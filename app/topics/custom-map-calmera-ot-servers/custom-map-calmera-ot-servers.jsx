import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-calmera-ot-servers');
}

export default function CustomMapCalmeraOtServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-calmera-ot-servers" />;
}
