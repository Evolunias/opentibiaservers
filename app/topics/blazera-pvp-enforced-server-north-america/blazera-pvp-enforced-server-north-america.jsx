import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-north-america');
}

export default function BlazeraPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-north-america" />;
}
