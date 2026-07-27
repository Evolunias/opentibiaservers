import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-north-america');
}

export default function SaintsotPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-north-america" />;
}
