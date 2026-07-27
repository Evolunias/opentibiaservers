import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-latin-america');
}

export default function CanobRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-latin-america" />;
}
