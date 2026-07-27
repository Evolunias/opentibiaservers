import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-north-america');
}

export default function NonPvpServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-north-america" />;
}
