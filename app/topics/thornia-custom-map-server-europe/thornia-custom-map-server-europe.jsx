import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-europe');
}

export default function ThorniaCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-europe" />;
}
