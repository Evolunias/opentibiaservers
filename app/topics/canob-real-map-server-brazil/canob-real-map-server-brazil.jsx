import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-brazil');
}

export default function CanobRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-brazil" />;
}
