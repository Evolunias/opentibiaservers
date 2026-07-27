import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-canada');
}

export default function SaintsotPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-canada" />;
}
