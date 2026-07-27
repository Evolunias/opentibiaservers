import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-germany');
}

export default function OxygenotRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-germany" />;
}
