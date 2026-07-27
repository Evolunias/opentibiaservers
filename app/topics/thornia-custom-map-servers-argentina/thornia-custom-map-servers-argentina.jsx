import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-argentina');
}

export default function ThorniaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-argentina" />;
}
