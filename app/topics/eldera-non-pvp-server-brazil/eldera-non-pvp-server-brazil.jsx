import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-brazil');
}

export default function ElderaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-brazil" />;
}
