import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-europe');
}

export default function SaintsotPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-europe" />;
}
