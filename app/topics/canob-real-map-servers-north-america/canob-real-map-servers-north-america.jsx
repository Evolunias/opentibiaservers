import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-north-america');
}

export default function CanobRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-north-america" />;
}
