import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-usa');
}

export default function CanobRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-usa" />;
}
