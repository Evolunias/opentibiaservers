import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-uk');
}

export default function RealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-uk" />;
}
