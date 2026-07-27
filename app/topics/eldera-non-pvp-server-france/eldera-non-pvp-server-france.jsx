import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-france');
}

export default function ElderaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-france" />;
}
