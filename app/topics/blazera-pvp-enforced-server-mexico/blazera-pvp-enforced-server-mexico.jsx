import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-mexico');
}

export default function BlazeraPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-mexico" />;
}
