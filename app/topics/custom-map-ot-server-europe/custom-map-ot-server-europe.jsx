import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-europe');
}

export default function CustomMapOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-europe" />;
}
