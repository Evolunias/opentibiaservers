import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-high-exp');
}

export default function PvpEnforcedOtServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-high-exp" />;
}
