import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-sweden');
}

export default function PvpEnforcedSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-sweden" />;
}
