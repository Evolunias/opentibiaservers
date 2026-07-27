import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-brazil');
}

export default function TibiaraRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-brazil" />;
}
