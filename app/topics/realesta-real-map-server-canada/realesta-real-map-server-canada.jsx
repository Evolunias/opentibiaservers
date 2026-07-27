import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-server-canada');
}

export default function RealestaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-server-canada" />;
}
