import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-server-canada');
}

export default function LumineraRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-server-canada" />;
}
