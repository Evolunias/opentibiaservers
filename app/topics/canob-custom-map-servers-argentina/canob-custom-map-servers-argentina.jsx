import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-argentina');
}

export default function CanobCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-argentina" />;
}
