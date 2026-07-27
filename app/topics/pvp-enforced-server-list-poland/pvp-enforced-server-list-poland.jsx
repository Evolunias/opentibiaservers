import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-list-poland');
}

export default function PvpEnforcedServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-list-poland" />;
}
