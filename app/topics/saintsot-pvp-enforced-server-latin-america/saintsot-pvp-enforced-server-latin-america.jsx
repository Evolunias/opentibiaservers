import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-latin-america');
}

export default function SaintsotPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-latin-america" />;
}
