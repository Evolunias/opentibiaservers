import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-harmonia-ot-server');
}

export default function PvpEnforcedHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-harmonia-ot-server" />;
}
