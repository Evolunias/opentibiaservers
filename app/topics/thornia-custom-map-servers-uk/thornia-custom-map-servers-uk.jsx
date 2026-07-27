import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-uk');
}

export default function ThorniaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-uk" />;
}
