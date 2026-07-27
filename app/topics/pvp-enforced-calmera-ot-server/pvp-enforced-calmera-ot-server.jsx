import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-calmera-ot-server');
}

export default function PvpEnforcedCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-calmera-ot-server" />;
}
