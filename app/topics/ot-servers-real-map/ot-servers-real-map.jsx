import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-real-map');
}

export default function OtServersRealMapKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-real-map" />;
}
