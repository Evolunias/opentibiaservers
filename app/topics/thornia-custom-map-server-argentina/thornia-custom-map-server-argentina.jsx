import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-argentina');
}

export default function ThorniaCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-argentina" />;
}
