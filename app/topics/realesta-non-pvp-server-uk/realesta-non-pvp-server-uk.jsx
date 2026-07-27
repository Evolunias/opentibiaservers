import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-uk');
}

export default function RealestaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-uk" />;
}
