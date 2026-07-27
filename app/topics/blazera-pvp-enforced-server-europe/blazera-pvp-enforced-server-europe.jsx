import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-europe');
}

export default function BlazeraPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-europe" />;
}
