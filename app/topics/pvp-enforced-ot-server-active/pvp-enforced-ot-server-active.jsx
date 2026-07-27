import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-active');
}

export default function PvpEnforcedOtServerActiveKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-active" />;
}
