import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-poland');
}

export default function ThorniaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-poland" />;
}
