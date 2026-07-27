import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-mexico');
}

export default function ThorniaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-mexico" />;
}
