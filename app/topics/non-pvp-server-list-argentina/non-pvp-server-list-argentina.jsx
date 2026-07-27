import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-argentina');
}

export default function NonPvpServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-argentina" />;
}
