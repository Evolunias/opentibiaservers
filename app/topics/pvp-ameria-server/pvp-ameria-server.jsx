import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ameria-server');
}

export default function PvpAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-ameria-server" />;
}
