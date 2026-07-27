import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-france');
}

export default function SaintsotNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-france" />;
}
