import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-south-america');
}

export default function CanobRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-south-america" />;
}
