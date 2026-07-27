import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-enforced-server-north-america');
}

export default function AlasteraPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-enforced-server-north-america" />;
}
