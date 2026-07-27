import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-list-mexico');
}

export default function PvpEnforcedServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-list-mexico" />;
}
