import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-germany');
}

export default function CanobRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-germany" />;
}
