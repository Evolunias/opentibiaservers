import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-poland');
}

export default function CanobRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-poland" />;
}
