import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-brazil');
}

export default function ThorniaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-brazil" />;
}
