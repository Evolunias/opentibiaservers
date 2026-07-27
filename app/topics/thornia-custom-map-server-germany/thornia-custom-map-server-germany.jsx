import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-germany');
}

export default function ThorniaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-germany" />;
}
