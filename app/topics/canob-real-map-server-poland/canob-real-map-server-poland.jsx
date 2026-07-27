import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-poland');
}

export default function CanobRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-poland" />;
}
