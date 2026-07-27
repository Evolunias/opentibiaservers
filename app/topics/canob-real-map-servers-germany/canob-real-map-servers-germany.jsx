import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-germany');
}

export default function CanobRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-germany" />;
}
