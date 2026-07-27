import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-canada');
}

export default function ThorniaCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-canada" />;
}
