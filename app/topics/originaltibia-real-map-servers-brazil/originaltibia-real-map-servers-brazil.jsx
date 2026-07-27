import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-servers-brazil');
}

export default function OriginaltibiaRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-servers-brazil" />;
}
