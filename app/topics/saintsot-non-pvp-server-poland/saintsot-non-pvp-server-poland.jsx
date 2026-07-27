import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-poland');
}

export default function SaintsotNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-poland" />;
}
