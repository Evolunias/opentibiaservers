import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ameria-server');
}

export default function NonPvpAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ameria-server" />;
}
