import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-germany');
}

export default function CanobCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-germany" />;
}
