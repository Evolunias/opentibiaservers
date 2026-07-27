import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-europe');
}

export default function CanobRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-europe" />;
}
