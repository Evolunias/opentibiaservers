import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-poland');
}

export default function BlazeraPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-poland" />;
}
