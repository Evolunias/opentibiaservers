import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-argentina');
}

export default function PvpEnforcedOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-argentina" />;
}
