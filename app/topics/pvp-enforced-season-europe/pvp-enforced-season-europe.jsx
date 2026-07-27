import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-europe');
}

export default function PvpEnforcedSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-europe" />;
}
