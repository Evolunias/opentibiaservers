import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-south-america');
}

export default function MiracleRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-south-america" />;
}
