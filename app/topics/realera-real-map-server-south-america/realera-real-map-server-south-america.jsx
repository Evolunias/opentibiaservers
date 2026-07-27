import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-server-south-america');
}

export default function RealeraRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-server-south-america" />;
}
