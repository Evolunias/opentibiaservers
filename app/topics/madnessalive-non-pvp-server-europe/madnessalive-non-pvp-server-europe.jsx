import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-europe');
}

export default function MadnessaliveNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-europe" />;
}
