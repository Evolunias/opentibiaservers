import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-poland');
}

export default function RealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-poland" />;
}
