import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-uk');
}

export default function SaintsotNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-uk" />;
}
