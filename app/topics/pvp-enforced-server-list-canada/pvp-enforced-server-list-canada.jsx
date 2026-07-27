import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-list-canada');
}

export default function PvpEnforcedServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-list-canada" />;
}
