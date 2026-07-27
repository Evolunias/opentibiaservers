import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-uk');
}

export default function SaintsotPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-uk" />;
}
