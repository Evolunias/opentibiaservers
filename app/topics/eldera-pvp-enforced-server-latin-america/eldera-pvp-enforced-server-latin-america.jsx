import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-latin-america');
}

export default function ElderaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-latin-america" />;
}
