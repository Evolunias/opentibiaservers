import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-real-map');
}

export default function NonPvpOtServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-real-map" />;
}
