import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-france');
}

export default function TibianusRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-france" />;
}
