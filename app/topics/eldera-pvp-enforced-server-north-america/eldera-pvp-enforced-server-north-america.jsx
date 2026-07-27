import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-north-america');
}

export default function ElderaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-north-america" />;
}
