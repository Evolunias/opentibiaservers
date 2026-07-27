import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-north-america');
}

export default function MidhemRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-north-america" />;
}
