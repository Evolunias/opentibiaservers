import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-argentina');
}

export default function BlazeraPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-argentina" />;
}
