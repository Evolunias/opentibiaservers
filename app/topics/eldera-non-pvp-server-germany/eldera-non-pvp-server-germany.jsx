import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-germany');
}

export default function ElderaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-germany" />;
}
