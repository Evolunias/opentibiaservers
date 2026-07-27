import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-south-america');
}

export default function SaintsotPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-south-america" />;
}
