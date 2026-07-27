import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-latin-america');
}

export default function RuthlessChaosCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-latin-america" />;
}
