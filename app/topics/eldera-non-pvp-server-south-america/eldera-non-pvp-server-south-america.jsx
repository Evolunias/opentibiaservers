import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-south-america');
}

export default function ElderaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-south-america" />;
}
