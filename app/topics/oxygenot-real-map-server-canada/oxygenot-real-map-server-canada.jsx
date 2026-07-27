import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-canada');
}

export default function OxygenotRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-canada" />;
}
