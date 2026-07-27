import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-france');
}

export default function PvpEnforcedOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-france" />;
}
