import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-europe');
}

export default function CanobRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-europe" />;
}
