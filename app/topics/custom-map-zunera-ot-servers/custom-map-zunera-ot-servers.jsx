import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-zunera-ot-servers');
}

export default function CustomMapZuneraOtServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-zunera-ot-servers" />;
}
