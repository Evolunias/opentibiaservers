import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-list-europe');
}

export default function PvpEnforcedServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-list-europe" />;
}
