import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-brazil');
}

export default function PvpServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-brazil" />;
}
