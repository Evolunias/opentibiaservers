import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-server-argentina');
}

export default function RealeraRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-server-argentina" />;
}
