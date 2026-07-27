import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-usa');
}

export default function PvpEnforcedOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-usa" />;
}
