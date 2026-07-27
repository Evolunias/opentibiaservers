import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-brazil');
}

export default function RealestaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-brazil" />;
}
