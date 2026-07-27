import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-uk');
}

export default function RuthlessChaosCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-uk" />;
}
