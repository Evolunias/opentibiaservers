import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-latin-america');
}

export default function RuthlessChaosCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-latin-america" />;
}
