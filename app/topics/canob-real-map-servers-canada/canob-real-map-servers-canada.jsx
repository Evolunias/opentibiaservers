import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-canada');
}

export default function CanobRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-canada" />;
}
