import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-poland');
}

export default function PvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-poland" />;
}
