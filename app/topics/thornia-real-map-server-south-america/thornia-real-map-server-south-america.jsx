import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-server-south-america');
}

export default function ThorniaRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-server-south-america" />;
}
