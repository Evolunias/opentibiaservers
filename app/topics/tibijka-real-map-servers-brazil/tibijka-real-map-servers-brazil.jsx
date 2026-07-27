import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-servers-brazil');
}

export default function TibijkaRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-servers-brazil" />;
}
