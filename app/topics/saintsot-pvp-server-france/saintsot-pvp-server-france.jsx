import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-france');
}

export default function SaintsotPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-france" />;
}
