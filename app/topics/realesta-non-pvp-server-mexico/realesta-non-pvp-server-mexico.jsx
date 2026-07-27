import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-mexico');
}

export default function RealestaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-mexico" />;
}
