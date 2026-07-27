import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-usa');
}

export default function RealestaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-usa" />;
}
