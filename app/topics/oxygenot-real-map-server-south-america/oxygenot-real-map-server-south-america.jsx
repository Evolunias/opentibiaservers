import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-south-america');
}

export default function OxygenotRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-south-america" />;
}
