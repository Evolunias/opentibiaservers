import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-poland');
}

export default function SaintsotPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-poland" />;
}
