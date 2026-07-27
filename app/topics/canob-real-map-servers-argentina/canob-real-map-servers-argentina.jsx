import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-argentina');
}

export default function CanobRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-argentina" />;
}
