import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-france');
}

export default function SaintsotPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-france" />;
}
