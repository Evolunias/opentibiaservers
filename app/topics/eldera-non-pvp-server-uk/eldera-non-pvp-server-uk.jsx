import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-uk');
}

export default function ElderaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-uk" />;
}
