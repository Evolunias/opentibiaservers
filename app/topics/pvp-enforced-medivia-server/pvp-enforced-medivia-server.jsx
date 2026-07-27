import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-medivia-server');
}

export default function PvpEnforcedMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-medivia-server" />;
}
