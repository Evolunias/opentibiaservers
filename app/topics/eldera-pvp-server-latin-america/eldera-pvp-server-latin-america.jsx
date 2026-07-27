import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-latin-america');
}

export default function ElderaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-latin-america" />;
}
