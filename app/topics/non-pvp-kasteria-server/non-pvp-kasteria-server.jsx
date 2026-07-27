import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-kasteria-server');
}

export default function NonPvpKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-kasteria-server" />;
}
