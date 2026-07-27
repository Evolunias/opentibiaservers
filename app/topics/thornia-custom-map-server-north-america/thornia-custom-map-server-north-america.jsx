import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-north-america');
}

export default function ThorniaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-north-america" />;
}
