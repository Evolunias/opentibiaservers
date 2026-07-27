import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-germany');
}

export default function PvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-germany" />;
}
