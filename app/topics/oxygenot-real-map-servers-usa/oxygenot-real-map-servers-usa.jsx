import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-usa');
}

export default function OxygenotRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-usa" />;
}
