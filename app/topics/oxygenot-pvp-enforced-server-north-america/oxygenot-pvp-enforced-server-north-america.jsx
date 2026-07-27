import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-north-america');
}

export default function OxygenotPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-north-america" />;
}
