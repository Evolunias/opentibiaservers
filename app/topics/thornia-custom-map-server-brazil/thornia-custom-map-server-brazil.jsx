import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-brazil');
}

export default function ThorniaCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-brazil" />;
}
