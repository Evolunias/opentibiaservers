import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-argentina');
}

export default function CanobRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-argentina" />;
}
