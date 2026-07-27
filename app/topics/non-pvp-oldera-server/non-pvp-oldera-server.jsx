import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-oldera-server');
}

export default function NonPvpOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-oldera-server" />;
}
