import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-france');
}

export default function ThaisotNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-france" />;
}
