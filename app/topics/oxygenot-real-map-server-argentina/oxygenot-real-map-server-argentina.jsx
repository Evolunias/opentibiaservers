import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-argentina');
}

export default function OxygenotRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-argentina" />;
}
