import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-europe');
}

export default function RuthlessChaosNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-europe" />;
}
