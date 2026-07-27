import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-brazil');
}

export default function BlazeraPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-brazil" />;
}
