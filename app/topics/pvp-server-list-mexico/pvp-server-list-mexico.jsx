import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-mexico');
}

export default function PvpServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-mexico" />;
}
