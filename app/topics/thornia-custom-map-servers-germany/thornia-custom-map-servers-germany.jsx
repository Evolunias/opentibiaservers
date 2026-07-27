import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-germany');
}

export default function ThorniaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-germany" />;
}
