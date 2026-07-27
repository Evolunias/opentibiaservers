import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-mexico');
}

export default function ElderaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-mexico" />;
}
