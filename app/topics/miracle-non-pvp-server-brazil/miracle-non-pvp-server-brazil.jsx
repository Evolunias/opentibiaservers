import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-brazil');
}

export default function MiracleNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-brazil" />;
}
