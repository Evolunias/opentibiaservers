import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-canada');
}

export default function MidhemRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-canada" />;
}
