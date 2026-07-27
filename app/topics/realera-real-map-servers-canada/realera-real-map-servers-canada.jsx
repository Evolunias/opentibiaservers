import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-canada');
}

export default function RealeraRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-canada" />;
}
