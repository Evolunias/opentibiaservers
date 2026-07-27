import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-real-map');
}

export default function FunServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="fun-server-real-map" />;
}
