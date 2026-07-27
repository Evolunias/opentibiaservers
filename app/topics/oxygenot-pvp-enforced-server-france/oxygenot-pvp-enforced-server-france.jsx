import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-france');
}

export default function OxygenotPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-france" />;
}
