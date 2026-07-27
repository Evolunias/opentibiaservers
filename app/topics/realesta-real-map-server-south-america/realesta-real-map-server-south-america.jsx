import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-server-south-america');
}

export default function RealestaRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-server-south-america" />;
}
