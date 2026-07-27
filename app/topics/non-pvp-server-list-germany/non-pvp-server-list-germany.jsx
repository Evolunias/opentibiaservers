import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-germany');
}

export default function NonPvpServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-germany" />;
}
