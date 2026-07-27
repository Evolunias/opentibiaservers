import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-canada');
}

export default function SaintsotPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-canada" />;
}
