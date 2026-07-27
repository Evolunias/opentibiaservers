import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-mexico');
}

export default function OxygenotRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-mexico" />;
}
