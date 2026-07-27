import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-europe');
}

export default function SaintsotNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-europe" />;
}
