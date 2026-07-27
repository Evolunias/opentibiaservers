import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-poland');
}

export default function OxygenotPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-poland" />;
}
