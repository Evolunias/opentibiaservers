import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-server-usa');
}

export default function RealeraRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-server-usa" />;
}
