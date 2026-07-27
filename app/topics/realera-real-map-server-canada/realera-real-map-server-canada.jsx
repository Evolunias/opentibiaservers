import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-server-canada');
}

export default function RealeraRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-server-canada" />;
}
