import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-france');
}

export default function RuthlessChaosCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-france" />;
}
