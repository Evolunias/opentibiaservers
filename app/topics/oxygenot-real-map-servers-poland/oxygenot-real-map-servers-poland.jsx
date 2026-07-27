import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-poland');
}

export default function OxygenotRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-poland" />;
}
