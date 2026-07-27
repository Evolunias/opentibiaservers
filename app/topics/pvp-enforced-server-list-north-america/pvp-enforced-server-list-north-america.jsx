import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-list-north-america');
}

export default function PvpEnforcedServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-list-north-america" />;
}
