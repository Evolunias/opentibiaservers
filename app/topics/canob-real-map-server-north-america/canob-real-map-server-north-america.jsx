import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-north-america');
}

export default function CanobRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-north-america" />;
}
