import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-poland');
}

export default function ThorniaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-poland" />;
}
