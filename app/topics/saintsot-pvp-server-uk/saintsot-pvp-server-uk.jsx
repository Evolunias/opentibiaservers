import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-uk');
}

export default function SaintsotPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-uk" />;
}
