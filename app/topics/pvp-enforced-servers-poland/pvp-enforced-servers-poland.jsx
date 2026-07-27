import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-poland');
}

export default function PvpEnforcedServersPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-poland" />;
}
