import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-mexico');
}

export default function ThorniaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-mexico" />;
}
