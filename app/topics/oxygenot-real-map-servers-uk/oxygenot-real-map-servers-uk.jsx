import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-uk');
}

export default function OxygenotRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-uk" />;
}
