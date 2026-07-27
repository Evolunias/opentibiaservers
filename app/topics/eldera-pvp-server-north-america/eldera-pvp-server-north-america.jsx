import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-north-america');
}

export default function ElderaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-north-america" />;
}
