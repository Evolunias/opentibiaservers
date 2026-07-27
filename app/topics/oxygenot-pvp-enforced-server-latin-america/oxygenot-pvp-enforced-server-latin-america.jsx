import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-latin-america');
}

export default function OxygenotPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-latin-america" />;
}
