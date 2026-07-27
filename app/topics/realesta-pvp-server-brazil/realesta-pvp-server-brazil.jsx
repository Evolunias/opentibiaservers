import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-brazil');
}

export default function RealestaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-brazil" />;
}
