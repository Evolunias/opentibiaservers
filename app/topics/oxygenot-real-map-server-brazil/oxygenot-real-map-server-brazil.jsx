import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-brazil');
}

export default function OxygenotRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-brazil" />;
}
