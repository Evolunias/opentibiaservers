import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-kasteria-server');
}

export default function PvpKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-kasteria-server" />;
}
