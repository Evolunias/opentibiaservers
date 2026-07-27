import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-poland');
}

export default function ThorniaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-poland" />;
}
