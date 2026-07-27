import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-canada');
}

export default function ThorniaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-canada" />;
}
