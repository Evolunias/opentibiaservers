import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-uk');
}

export default function CanobRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-uk" />;
}
