import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-uk');
}

export default function ThorniaCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-uk" />;
}
