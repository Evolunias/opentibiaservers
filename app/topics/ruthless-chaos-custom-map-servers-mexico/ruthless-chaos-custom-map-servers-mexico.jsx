import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-mexico');
}

export default function RuthlessChaosCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-mexico" />;
}
