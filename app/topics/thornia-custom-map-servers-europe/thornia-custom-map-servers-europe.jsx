import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-europe');
}

export default function ThorniaCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-europe" />;
}
