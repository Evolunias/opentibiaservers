import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-france');
}

export default function OriginaltibiaRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-france" />;
}
