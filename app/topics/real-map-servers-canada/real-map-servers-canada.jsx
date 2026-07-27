import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-canada');
}

export default function RealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-canada" />;
}
