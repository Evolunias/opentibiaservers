import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-canada');
}

export default function SaintsotNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-canada" />;
}
