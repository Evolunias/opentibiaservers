import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-poland');
}

export default function SaintsotPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-poland" />;
}
