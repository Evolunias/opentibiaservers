import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-uk');
}

export default function PvpServerListUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-uk" />;
}
