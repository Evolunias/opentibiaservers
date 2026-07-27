import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-pvp-enforced-server');
}

export default function CalmeraOt100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-pvp-enforced-server" />;
}
