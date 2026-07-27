import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-france');
}

export default function OlderaRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-france" />;
}
