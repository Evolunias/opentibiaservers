import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-canada');
}

export default function CanobRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-canada" />;
}
