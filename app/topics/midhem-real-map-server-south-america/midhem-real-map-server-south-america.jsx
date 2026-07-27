import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-south-america');
}

export default function MidhemRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-south-america" />;
}
