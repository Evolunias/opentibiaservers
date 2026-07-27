import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-brazil');
}

export default function NonPvpServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-brazil" />;
}
