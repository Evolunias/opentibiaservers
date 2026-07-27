import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-germany');
}

export default function ThorniaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-germany" />;
}
