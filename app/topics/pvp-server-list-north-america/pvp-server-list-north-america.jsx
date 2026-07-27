import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-north-america');
}

export default function PvpServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-north-america" />;
}
