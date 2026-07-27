import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-france');
}

export default function ThaisotPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-france" />;
}
