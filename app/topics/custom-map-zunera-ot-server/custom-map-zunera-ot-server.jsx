import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-zunera-ot-server');
}

export default function CustomMapZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-zunera-ot-server" />;
}
