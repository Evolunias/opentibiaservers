import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-brazil');
}

export default function CanobRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-brazil" />;
}
