import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-south-america');
}

export default function RuthlessChaosCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-south-america" />;
}
