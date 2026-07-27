import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-argentina');
}

export default function RealestaNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-argentina" />;
}
