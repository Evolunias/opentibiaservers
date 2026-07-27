import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-brazil');
}

export default function PvpEnforcedOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-brazil" />;
}
