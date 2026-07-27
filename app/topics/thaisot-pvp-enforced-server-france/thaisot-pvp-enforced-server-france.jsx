import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-france');
}

export default function ThaisotPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-france" />;
}
