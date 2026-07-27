import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-uk');
}

export default function CustomMapOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-uk" />;
}
