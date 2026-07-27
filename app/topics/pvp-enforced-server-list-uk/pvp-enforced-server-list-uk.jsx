import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-list-uk');
}

export default function PvpEnforcedServerListUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-list-uk" />;
}
