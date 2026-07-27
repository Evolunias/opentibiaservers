import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-list-germany');
}

export default function PvpEnforcedServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-list-germany" />;
}
