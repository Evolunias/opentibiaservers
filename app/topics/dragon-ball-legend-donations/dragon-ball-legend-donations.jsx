import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-donations');
}

export default function DragonBallLegendDonationsKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-donations" />;
}
