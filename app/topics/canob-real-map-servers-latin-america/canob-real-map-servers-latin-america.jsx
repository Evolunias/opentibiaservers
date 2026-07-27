import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-latin-america');
}

export default function CanobRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-latin-america" />;
}
