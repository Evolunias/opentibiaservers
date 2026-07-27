import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-uk');
}

export default function NonPvpServerListUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-uk" />;
}
