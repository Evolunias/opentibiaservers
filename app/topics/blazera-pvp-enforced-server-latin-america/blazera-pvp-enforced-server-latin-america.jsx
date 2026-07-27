import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-latin-america');
}

export default function BlazeraPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-latin-america" />;
}
