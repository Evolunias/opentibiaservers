import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-latin-america');
}

export default function TibiaraPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-latin-america" />;
}
