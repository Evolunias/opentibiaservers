import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-brazil');
}

export default function RuthlessChaosCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-brazil" />;
}
