import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-canada');
}

export default function RealestaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-canada" />;
}
