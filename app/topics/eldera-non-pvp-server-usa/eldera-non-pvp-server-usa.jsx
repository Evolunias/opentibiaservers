import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-usa');
}

export default function ElderaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-usa" />;
}
