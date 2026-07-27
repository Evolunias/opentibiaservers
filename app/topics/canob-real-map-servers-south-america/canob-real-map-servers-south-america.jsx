import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-south-america');
}

export default function CanobRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-south-america" />;
}
