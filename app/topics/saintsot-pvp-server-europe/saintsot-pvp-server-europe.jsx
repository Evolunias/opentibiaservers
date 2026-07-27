import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-europe');
}

export default function SaintsotPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-europe" />;
}
