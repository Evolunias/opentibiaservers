import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-argentina');
}

export default function ThorniaRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-argentina" />;
}
