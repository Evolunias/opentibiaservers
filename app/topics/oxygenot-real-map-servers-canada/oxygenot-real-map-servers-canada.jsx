import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-canada');
}

export default function OxygenotRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-canada" />;
}
