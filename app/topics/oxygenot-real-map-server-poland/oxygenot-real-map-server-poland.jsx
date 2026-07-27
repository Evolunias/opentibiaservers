import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-poland');
}

export default function OxygenotRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-poland" />;
}
