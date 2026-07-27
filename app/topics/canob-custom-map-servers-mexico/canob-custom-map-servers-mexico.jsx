import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-mexico');
}

export default function CanobCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-mexico" />;
}
