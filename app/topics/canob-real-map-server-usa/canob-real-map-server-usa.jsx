import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-usa');
}

export default function CanobRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-usa" />;
}
