import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-germany');
}

export default function PvpServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-germany" />;
}
