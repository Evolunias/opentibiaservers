import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-brazil');
}

export default function RealeraNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-brazil" />;
}
