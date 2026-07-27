import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-evolera-server');
}

export default function PvpEnforcedEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-evolera-server" />;
}
