import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-south-america');
}

export default function SaintsotNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-south-america" />;
}
