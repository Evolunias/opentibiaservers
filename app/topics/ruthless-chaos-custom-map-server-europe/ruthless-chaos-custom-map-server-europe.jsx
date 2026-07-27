import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-europe');
}

export default function RuthlessChaosCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-europe" />;
}
