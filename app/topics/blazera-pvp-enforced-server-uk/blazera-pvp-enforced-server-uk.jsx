import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-uk');
}

export default function BlazeraPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-uk" />;
}
