import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-usa');
}

export default function SaintsotPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-usa" />;
}
