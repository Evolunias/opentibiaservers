import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-north-america');
}

export default function ElderaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-north-america" />;
}
