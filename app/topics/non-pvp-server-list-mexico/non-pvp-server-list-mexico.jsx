import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-mexico');
}

export default function NonPvpServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-mexico" />;
}
