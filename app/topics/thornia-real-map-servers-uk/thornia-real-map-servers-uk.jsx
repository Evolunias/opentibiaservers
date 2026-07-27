import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-uk');
}

export default function ThorniaRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-uk" />;
}
