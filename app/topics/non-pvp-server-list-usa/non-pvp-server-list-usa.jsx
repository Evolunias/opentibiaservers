import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-usa');
}

export default function NonPvpServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-usa" />;
}
