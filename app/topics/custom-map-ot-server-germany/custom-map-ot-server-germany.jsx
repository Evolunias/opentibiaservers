import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-germany');
}

export default function CustomMapOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-germany" />;
}
