import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-uk');
}

export default function CanobRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-uk" />;
}
