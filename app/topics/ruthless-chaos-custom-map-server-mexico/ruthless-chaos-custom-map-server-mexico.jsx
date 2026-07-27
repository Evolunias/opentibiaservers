import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-mexico');
}

export default function RuthlessChaosCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-mexico" />;
}
