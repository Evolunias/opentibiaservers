import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-argentina');
}

export default function PvpServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-argentina" />;
}
