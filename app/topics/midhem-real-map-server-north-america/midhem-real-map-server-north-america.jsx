import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-north-america');
}

export default function MidhemRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-north-america" />;
}
