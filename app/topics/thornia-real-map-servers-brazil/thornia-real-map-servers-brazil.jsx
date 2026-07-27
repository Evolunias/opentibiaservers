import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-brazil');
}

export default function ThorniaRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-brazil" />;
}
