import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-mexico');
}

export default function CanobRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-mexico" />;
}
