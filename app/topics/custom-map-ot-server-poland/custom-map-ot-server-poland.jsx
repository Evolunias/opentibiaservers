import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-poland');
}

export default function CustomMapOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-poland" />;
}
