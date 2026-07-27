import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-north-america');
}

export default function SaintsotNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-north-america" />;
}
