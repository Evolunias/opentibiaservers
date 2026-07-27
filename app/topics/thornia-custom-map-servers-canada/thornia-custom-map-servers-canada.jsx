import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-canada');
}

export default function ThorniaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-canada" />;
}
