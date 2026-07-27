import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-brazil');
}

export default function RealeraPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-brazil" />;
}
