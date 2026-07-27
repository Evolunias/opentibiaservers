import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-france');
}

export default function ThaisotPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-france" />;
}
