import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-canada');
}

export default function NonPvpServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-canada" />;
}
