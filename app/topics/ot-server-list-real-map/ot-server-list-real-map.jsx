import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-real-map');
}

export default function OtServerListRealMapKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-real-map" />;
}
