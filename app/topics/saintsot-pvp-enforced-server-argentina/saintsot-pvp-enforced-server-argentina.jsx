import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-argentina');
}

export default function SaintsotPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-argentina" />;
}
