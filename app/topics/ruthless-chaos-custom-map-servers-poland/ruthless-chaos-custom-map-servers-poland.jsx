import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-poland');
}

export default function RuthlessChaosCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-poland" />;
}
