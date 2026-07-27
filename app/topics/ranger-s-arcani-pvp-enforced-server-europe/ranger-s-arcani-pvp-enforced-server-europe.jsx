import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-enforced-server-europe');
}

export default function RangerSArcaniPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-enforced-server-europe" />;
}
